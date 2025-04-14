# Usage
- Install latest Node.js.

- Clone this repository.

- Run command: `npm i && npm run build`.

- Add configuration in you IDE or other supported AI agents.

  - In Vscode:

    Configuration file path: `.vscode/mcp.json`

    ```
    {
        "servers": {
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

- And then, you can swith your copilot to `Agent` mode and ask som questions in AI chat window.


> To avoid strange problems, make sure you are using the latest Vscode and Cursor.
>
> See more details in `https://modelcontextprotocol.io/quickstart/server`