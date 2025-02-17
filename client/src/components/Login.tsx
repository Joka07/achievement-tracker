
import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface LoginProps {
  onLogin: (success: boolean) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // This is a simple example - you should implement proper authentication
    if ((username === "Benjamin" || username === "joel") && password === "Joelistcool") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="p-6 w-96">
        <h1 className="text-2xl font-bold mb-4">Login Required</h1>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}
