'use client';

import { useState } from 'react';
import { FaGoogle, FaWeixin, FaQq, FaWeibo } from 'react-icons/fa';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
}

type LoginMethod = 'email' | 'phone';

export function AuthModal({ isOpen, onClose, mode }: AuthModalProps) {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [utrLevel, setUtrLevel] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'register' && !agreeToTerms) {
      alert('请同意用户协议和隐私政策');
      return;
    }
    // TODO: 处理登录/注册逻辑
    console.log({ 
      loginMethod,
      email: loginMethod === 'email' ? email : undefined,
      phone: loginMethod === 'phone' ? phone : undefined,
      verificationCode: loginMethod === 'phone' ? verificationCode : undefined,
      password: loginMethod === 'email' ? password : undefined,
      name,
      utrLevel 
    });
  };

  const handleSocialLogin = (platform: 'google' | 'wechat' | 'qq' | 'weibo') => {
    console.log(`使用 ${platform} 登录`);
  };

  const handleSendVerificationCode = () => {
    if (!phone || phone.length !== 11) {
      alert('请输入正确的手机号');
      return;
    }
    // TODO: 发送验证码逻辑
    console.log(`发送验证码到 ${phone}`);
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleForgotPassword = () => {
    console.log('忘记密码');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {mode === 'login' ? '登录' : '注册'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* 社交登录按钮 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => handleSocialLogin('wechat')}
            className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50"
          >
            <FaWeixin className="text-green-500 text-xl" />
            <span>微信登录</span>
          </button>
          <button
            onClick={() => handleSocialLogin('qq')}
            className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50"
          >
            <FaQq className="text-blue-500 text-xl" />
            <span>QQ登录</span>
          </button>
          <button
            onClick={() => handleSocialLogin('weibo')}
            className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50"
          >
            <FaWeibo className="text-red-500 text-xl" />
            <span>微博登录</span>
          </button>
          <button
            onClick={() => handleSocialLogin('google')}
            className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50"
          >
            <FaGoogle className="text-red-500 text-xl" />
            <span>Google登录</span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">或使用以下方式{mode === 'login' ? '登录' : '注册'}</span>
          </div>
        </div>

        {/* 登录方式切换 */}
        {mode === 'login' && (
          <div className="flex rounded-lg border mb-6">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 text-center ${
                loginMethod === 'email'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              邮箱登录
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2 text-center ${
                loginMethod === 'phone'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              手机号登录
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-gray-700 mb-2">姓名</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border p-2"
                required
              />
            </div>
          )}
          
          {loginMethod === 'email' ? (
            <>
              <div>
                <label className="block text-gray-700 mb-2">邮箱</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border p-2"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">密码</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border p-2 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-blue-600 hover:text-blue-700 mt-1"
                  >
                    忘记密码？
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-gray-700 mb-2">手机号</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border p-2"
                  pattern="[0-9]{11}"
                  placeholder="请输入11位手机号"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">验证码</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="flex-1 rounded-lg border p-2"
                    maxLength={6}
                    placeholder="请输入验证码"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSendVerificationCode}
                    disabled={countdown > 0}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {countdown > 0 ? `${countdown}秒后重发` : '发送验证码'}
                  </button>
                </div>
              </div>
            </>
          )}

          {mode === 'register' && (
            <>
              <div>
                <label className="block text-gray-700 mb-2">UTR级别</label>
                <select
                  value={utrLevel}
                  onChange={(e) => setUtrLevel(e.target.value)}
                  className="w-full rounded-lg border p-2"
                  required
                >
                  <option value="">请选择</option>
                  <option value="1-3">UTR 1-3 (初学者)</option>
                  <option value="4-6">UTR 4-6 (进阶选手)</option>
                  <option value="7-8">UTR 7-8 (中级选手)</option>
                  <option value="9+">UTR 9+ (高级选手)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  我已阅读并同意
                  <button type="button" className="text-blue-600 hover:text-blue-700 mx-1">
                    用户协议
                  </button>
                  和
                  <button type="button" className="text-blue-600 hover:text-blue-700 ml-1">
                    隐私政策
                  </button>
                </label>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            {mode === 'login' ? '登录' : '注册'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          {mode === 'login' ? (
            <span>
              还没有账号？
              <button
                onClick={() => {
                  setLoginMethod('email');
                  setEmail('');
                  setPassword('');
                }}
                className="text-blue-600 hover:text-blue-700 ml-1"
              >
                立即注册
              </button>
            </span>
          ) : (
            <span>
              已有账号？
              <button
                onClick={() => {
                  setLoginMethod('email');
                  setEmail('');
                  setPassword('');
                }}
                className="text-blue-600 hover:text-blue-700 ml-1"
              >
                立即登录
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 