"""Simple LangGraph example using cache, checkpointer, and store with one chat node.

Install:
    pip install langgraph

Run:
    python langgraph_cache_store_checkpointer.py
"""

from __future__ import annotations

from typing import TypedDict

from langgraph.cache.memory import InMemoryCache
from langgraph.checkpoint.memory import InMemorySaver
from langgraph.graph import END, START, StateGraph
from langgraph.store.memory import InMemoryStore


class GraphState(TypedDict):
    query: str
    answer: str


def chat_node(state: GraphState) -> dict:
    # If node caching works, this string is computed once per unique input.
    return {"answer": f"Chat response for: {state['query']}"}


def build_graph():
    builder = StateGraph(GraphState)
    builder.add_node("chat_node", chat_node)
    builder.add_edge(START, "chat_node")
    builder.add_edge("chat_node", END)

    cache = InMemoryCache()
    checkpointer = InMemorySaver()
    store = InMemoryStore()
    return builder.compile(cache=cache, checkpointer=checkpointer, store=store)


def main() -> None:
    app = build_graph()
    config = {"configurable": {"thread_id": "thread-1"}}

    first = app.invoke({"query": "What is LangGraph?"}, config=config)
    print("First run:", first["answer"])

    second = app.invoke({"query": "What is LangGraph?"}, config=config)
    print("Second run:", second["answer"])

    snapshot = app.get_state(config)
    print("Checkpoint state:", snapshot.values)


if __name__ == "__main__":
    main()
