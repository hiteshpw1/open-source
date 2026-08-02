
# open-source-test

Small practice repository containing static HTML files and a Python LangGraph memory demo.

## Project Contents

- index.html: Main HTML page
- navbar.html: Navigation markup
- test.txt: Simple text file used for testing
- langgraph_cache_store_checkpointer.py: One-node LangGraph example using in-memory cache, checkpointer, and store

## LangGraph Memory Demo

The Python script demonstrates a minimal graph with one node (`chat_node`) and these components:

- `InMemoryCache` for caching repeated computations
- `InMemorySaver` for thread-based checkpointing
- `InMemoryStore` for an in-memory store backend

Graph flow:

- START -> chat_node -> END

## Requirements

- Python 3.10+
- langgraph

Install dependency:

```powershell
pip install langgraph
```

## Run

From repository root:

```powershell
python langgraph_cache_store_checkpointer.py
```

## Expected Output

The script invokes the same query twice with the same thread id and prints:

- First run response
- Second run response
- Checkpoint state from `get_state`

## Troubleshooting

- If `langgraph` imports are unresolved, install the package in the active interpreter.
- If activation scripts are blocked in PowerShell, use process-level bypass for that session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
