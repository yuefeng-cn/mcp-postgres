import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import pkg from "pg";
const { Pool } = pkg;

const dbPool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
});

// Create server instance
const server = new McpServer({
  name: "postgres",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool(
  "exec-postgres-sql",
  "Execute a SQL query on postgres",
  {
    sql: z.string().describe("SQL query"),
  },
  async ({ sql }) => {
    const dangerousKeywords = [
      "insert",
      "update",
      "delete",
      "drop",
      "alter",
      "create",
      "truncate",
      "rename",
      "replace",
      "grant",
      "revoke",
      "exec",
      "execute",
    ];
    const isReadSQL = !dangerousKeywords.some((keyword) =>
      sql.includes(keyword)
    );
    if (!isReadSQL) {
      return {
        content: [
          {
            type: "text",
            text: "Only query SQL is allowed",
          },
        ],
      };
    }

    const queryResult = await dbPool.query(sql);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(queryResult.rows),
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.info("Postgres MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
