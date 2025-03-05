from fastmcp import FastMCP
import sqlite3
import os

# 初始化 MCP 服务器
mcp = FastMCP("OrderServer")

# 创建并初始化 SQLite 数据库（仅在第一次运行时）
def init_db():
    if not os.path.exists("orders.db"):
        conn = sqlite3.connect("orders.db")
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE orders (
                id TEXT PRIMARY KEY,
                status TEXT
            )
        """)
        # 插入测试数据
        cursor.executemany(
            "INSERT INTO orders (id, status) VALUES (?, ?)",
            [("123", "shipped"), ("456", "pending"), ("789", "delivered")]
        )
        conn.commit()
        conn.close()

# 定义工具：查询订单状态
@mcp.tool()
def query_order(order_id: str) -> str:
    """Query the status of an order by its ID"""
    conn = sqlite3.connect("orders.db")
    cursor = conn.cursor()
    cursor.execute("SELECT status FROM orders WHERE id = ?", (order_id,))
    result = cursor.fetchone()
    conn.close()
    return f"Order {order_id} status: {result[0]}" if result else f"Order {order_id} not found"

# 定义资源：获取所有订单
@mcp.resource("orders://all")
def get_all_orders() -> str:
    """Get a list of all orders"""
    conn = sqlite3.connect("orders.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, status FROM orders")
    orders = cursor.fetchall()
    conn.close()
    return "\n".join([f"Order {row[0]}: {row[1]}" for row in orders])

# 主函数：初始化数据库并运行服务器
if __name__ == "__main__":
    init_db()  # 初始化数据库
    mcp.run()