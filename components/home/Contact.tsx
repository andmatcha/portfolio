import { useEffect, useState } from "react";
import Required from "../common/Required";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  // バリデーションエラーのメッセージ
  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  // メール送信のステータス
  const [status, setStatus] = useState<string>("");

  // フォームのバリデーション
  const validateForm = (): boolean => {
    let isValid = true;
    let newErrors: FormData = { name: "", email: "", message: "" };

    // 名前のバリデーション（必須, 最大文字数）
    if (!formData.name.trim()) {
      newErrors.name = "お名前は必須です";
      isValid = false;
    } else if (formData.name.length > 60) {
      newErrors.name = "お名前は60文字以内で入力してください";
      isValid = false;
    }

    // メールアドレスのバリデーション（必須, フォーマットチェック, 最大文字数）
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスは必須です";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
      isValid = false;
    } else if (formData.email.length > 254) {
      newErrors.email = "正しいメールアドレスを入力してください";
      isValid = false;
    }

    // メッセージのバリデーション（必須, 最大文字数）
    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容は必須です";
      isValid = false;
    } else if (formData.message.length > 1000) {
      newErrors.message = "お問い合わせ内容は1000文字以内で入力してください";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStatus("sending");

      // サニタイズ処理（XSS対策）
      const sanitizedData = {
        name: formData.name.replace(/</g, "&lt;").replace(/>/g, "&gt;"), // < > をエスケープ
        email: formData.email.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        message: formData.message.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      };

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...sanitizedData,
        }),
      });

      const result = await res.json();
      if (res.status === 200) {
        setStatus("successful");
      } else {
        setStatus("failed");
      }
    }
  };

  return (
    <div className="px-4 md:px-40 pt-16 md:pt-20">
      <h2 className="text-3xl md:text-4xl">CONTACT</h2>
      <div className="pt-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1">
              <span>お名前</span>
              <Required />
            </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-8 p-2 border border-gray-400 rounded-md"
              required
            />
            <p className="text-red-600 text-xs">{errors.name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1">
              <span>メールアドレス</span>
              <Required />
            </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-8 p-2 border border-gray-400 rounded-md"
              required
            />
            <p className="text-red-600 text-xs">{errors.email}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1">
              <span>お問い合わせ内容</span>
              <Required />
            </p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-40 p-2 border border-gray-400 rounded-md"
            ></textarea>
            <p className="text-red-600 text-xs">{errors.message}</p>
          </div>
          <button
            type="submit"
            className="w-32 h-12 rounded-md text-white bg-sky-500 hover:bg-sky-600 transition-all duration-300"
          >
            送信
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
