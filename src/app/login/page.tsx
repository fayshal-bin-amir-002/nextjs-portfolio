import LoginForm from "@/components/auth/LoginForm";
import { Card, CardContent } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full px-4">
      <Card>
        <CardContent className="pt-6 w-[340px] md:w-[400px]">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
