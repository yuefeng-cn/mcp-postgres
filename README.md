# Usage
- Install latest Node.js.

- Clone this repository.

- Run command: `npm i && npm run build`.

- Add configuration in you IDE or other supported AI agents.

  - In VScode:

    Configuration file path: `.vscode/mcp.json`

    ```
    {
        "servers": {
            // you will see service start button here.
            "postgres": {
                "command": "node",
                "args": [
                    "/Users/xxx/project/personal/mcp-postgre/build/index.js" // the absolute path to your compiled JS file
                ],
                "env": {
                    "POSTGRES_HOST": "localhost",
                    "POSTGRES_PORT": "5432",
                    "POSTGRES_DB": "postgres",
                    "POSTGRES_USER": "postgres",
                    "POSTGRES_PASSWORD": "123456",
                }
            }
        }
    }
    ```
    
    
    
  - In Cursor
  
    Configuration file path: `.cursor/mcp.json`
  
    ```
    {
      "mcpServers": {
        "postgres": {
          "command": "node",
          "args": ["/Users/xxx/project/personal/mcp-postgre/build/index.js"], // the absolute path to your compiled JS file
          "env": {
            "POSTGRES_HOST": "localhost",
            "POSTGRES_PORT": "5432",
            "POSTGRES_DB": "postgres",
            "POSTGRES_USER": "postgres",
            "POSTGRES_PASSWORD": "123456"
          }
        }
      }
    }
    ```
    
    

- And then, you can switch your copilot to `Agent` mode and ask som questions in AI chat window.
  - If you are using Cursor, ask questions directly.
  - If you are using VScode, start server manuraly first in `mcp.json`. You can also use `Command` + `Shift` + `P`, and type `MCP` into input box to run some commands, including start and stop MCP servers.

  ![image](https://github.com/user-attachments/assets/e26eb154-a42a-4e91-b312-d91b09b1a9de)



> To avoid strange problems, make sure you are using the latest VScode and Cursor.
>
> See more details in `https://modelcontextprotocol.io/quickstart/server`
