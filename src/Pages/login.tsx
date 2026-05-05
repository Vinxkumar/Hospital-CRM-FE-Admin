import { Card, Form, Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../types/signIn";
import img from "../assets/background.jpg";
import loginHandler from "../handler/loginHandler";
import { Alert } from 'antd';
import { isTokenNotValid } from "../utils/TokenVerifier";
const login = () => {
    const [loginData, setLoginData] = useState<Login>({
        userEmail: "",
        password: "",
    })

    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);

    return (
<div
  className="flex items-center justify-start h-screen"
  style={{
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
 <div className="flex flex-col items-start pl-10">
  <Card
    title={<span className="text-yellow-400">Login</span>}
    className="w-96"
    style={{ backgroundColor: "#121212",
        border: "1px solid #333",
            borderRadius: "25px",
            boxShadow : "0 4px 8px rgba(0, 0, 0, 0.2)"
     }}
     headStyle={{ borderBottom: "1px solid #333", fontSize: "18px", fontWeight: "bold" }}
  >
    <Form layout="vertical">
          <Form.Item label={<span className="text-yellow-400  font-bold">Email</span>}>
            <Input
              placeholder="Enter your email"
              style={{
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #333",
                backgroundColor: "#1e1e1e",
                color: "#fff",
              }}
              value={loginData.userEmail}
              onChange={(e) => setLoginData({ ...loginData, userEmail: e.target.value })}
            />
          </Form.Item>
          <Form.Item label={<span className="text-yellow-400 font-bold">Password</span>}>
            <Input.Password
              type="password"
              placeholder="Enter your password"
                            style={{
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #333",
                backgroundColor: "#1e1e1e",
                color: "#fff",
              }}
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{
                backgroundColor: "#A16207",
                color: "black",
                fontWeight: "bold",
                height: "40px",
                borderRadius: "8px",
                border: "none",
                width: "100%",
            }} loading = {loading} onClick={() => {
                setLoading(true);
                if (isTokenNotValid(localStorage.getItem("token"))) {
                  alert("Session expired. Please log in again.");
                  navigate("/login");
                }
                loginHandler(loginData).then(() => {
                    setLoading(false);
                    <Alert title={`welcome ${localStorage.getItem("userName")}`} type="success" showIcon closable />
                    navigate("/home");
                }).catch(() => {
                    setLoading(false);
                });
            }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
  </div>
</div>
    )
}

export default login;