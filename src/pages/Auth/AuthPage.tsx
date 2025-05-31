
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, Mail, Phone, LogIn } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AuthPage = () => {
  const [authType, setAuthType] = useState<'email' | 'phone'>('email');
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // 倒计时逻辑
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // 发送验证码
  const handleSendOTP = async () => {
    if (!contact) {
      toast({
        title: "请输入联系方式",
        description: authType === 'email' ? "请输入邮箱地址" : "请输入手机号码",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // 模拟发送验证码
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setCountdown(120);
      toast({
        title: "验证码已发送",
        description: `验证码已发送至您的${authType === 'email' ? '邮箱' : '手机'}`,
      });
    }, 1500);
  };

  // 验证码登录
  const handleOTPLogin = async () => {
    if (!agreeToTerms) {
      toast({
        title: "请同意条款",
        description: "请勾选同意用户条款和隐私政策",
        variant: "destructive",
      });
      return;
    }

    if (otp.length !== 6) {
      toast({
        title: "请输入完整验证码",
        description: "验证码应为6位数字",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // 模拟验证码验证和自动注册/登录
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "登录成功",
        description: "欢迎来到 AIExplorer！",
      });
      
      // 设置登录状态
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', contact.split('@')[0] || contact.slice(-4));
      
      navigate('/');
      window.location.reload();
    }, 1500);
  };

  // 第三方登录
  const handleThirdPartyLogin = (provider: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `${provider}登录成功`,
        description: "欢迎来到 AIExplorer！",
      });
      
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', `${provider}User`);
      
      navigate('/');
      window.location.reload();
    }, 1500);
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto px-4 py-12">
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">登录 / 注册</CardTitle>
            <CardDescription className="text-center">
              使用邮箱或手机号快速登录
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 第三方登录 */}
            <div className="grid grid-cols-3 gap-3">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => handleThirdPartyLogin('Google')} 
                disabled={isLoading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  className="mr-1"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => handleThirdPartyLogin('Apple')} 
                disabled={isLoading}
              >
                <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Apple
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => handleThirdPartyLogin('微信')} 
                disabled={isLoading}
              >
                <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12Z"/>
                  <path d="M6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z"/>
                  <path d="M12.5 12C13.3284 12 14 11.3284 14 10.5C14 9.67157 13.3284 9 12.5 9C11.6716 9 11 9.67157 11 10.5C11 11.3284 11.6716 12 12.5 12Z"/>
                  <path d="M9.32 2.38C5.95 2.91 3.62 5.94 3.62 9.5C3.62 10.84 4.05 12.09 4.79 13.12L3.12 17.88L8.45 15.73C9.3 16.06 10.23 16.24 11.21 16.24C11.79 16.24 12.35 16.18 12.89 16.07C12.64 15.47 12.5 14.82 12.5 14.12C12.5 11.19 14.92 8.77 17.85 8.77C19.58 8.77 21.15 9.59 22.24 10.86C21.82 6.55 18.17 3.25 13.71 3.25C12.23 3.25 10.84 3.61 9.64 4.25C9.54 3.63 9.42 3.01 9.32 2.38Z"/>
                  <path d="M17.85 10.27C16.73 10.27 15.82 11.18 15.82 12.3C15.82 13.42 16.73 14.33 17.85 14.33C18.97 14.33 19.88 13.42 19.88 12.3C19.88 11.18 18.97 10.27 17.85 10.27Z"/>
                  <path d="M20.66 17.5C21.42 16.53 21.88 15.28 21.88 13.93C21.88 11 19.46 8.58 16.53 8.58C13.6 8.58 11.18 11 11.18 13.93C11.18 16.86 13.6 19.28 16.53 19.28C17.51 19.28 18.44 19.1 19.29 18.77L22.88 20.63L20.66 17.5Z"/>
                </svg>
                微信
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  或使用
                </span>
              </div>
            </div>

            {/* 邮箱/手机号切换 */}
            <Tabs value={authType} onValueChange={(value) => setAuthType(value as 'email' | 'phone')} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  邮箱
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  手机号
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱地址</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="请输入邮箱地址"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    disabled={otpSent}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">手机号码</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="请输入手机号码"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    disabled={otpSent}
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* 验证码部分 */}
            {otpSent && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">验证码</Label>
                  <div className="flex justify-center">
                    <InputOTP
                      value={otp}
                      onChange={setOtp}
                      maxLength={6}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    验证码已发送至您的{authType === 'email' ? '邮箱' : '手机'}
                  </p>
                </div>
              </div>
            )}

            {/* 用户协议 */}
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeToTerms} 
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)} 
              />
              <label
                htmlFor="terms"
                className="text-sm leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                我已阅读并同意{" "}
                <a href="/terms" className="text-primary hover:underline" target="_blank">
                  用户条款
                </a>{" "}
                和{" "}
                <a href="/privacy" className="text-primary hover:underline" target="_blank">
                  隐私政策
                </a>
              </label>
            </div>

            {/* 操作按钮 */}
            {!otpSent ? (
              <Button 
                onClick={handleSendOTP} 
                className="w-full" 
                disabled={isLoading || !contact.trim()}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    发送中...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" /> 
                    发送验证码
                  </span>
                )}
              </Button>
            ) : (
              <div className="space-y-3">
                <Button 
                  onClick={handleOTPLogin} 
                  className="w-full" 
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      验证中...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <LogIn className="mr-2 h-4 w-4" /> 
                      登录
                    </span>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleSendOTP}
                  className="w-full" 
                  disabled={countdown > 0 || isLoading}
                >
                  {countdown > 0 ? `重新发送 (${countdown}s)` : '重新发送验证码'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AuthPage;
