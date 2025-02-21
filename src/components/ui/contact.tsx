"use client";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

function Contact() {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const formData = new FormData();
        
        formData.append("access_key", "6b0f07ce-c263-4c4a-80e6-73dbd61c45d7");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("message", data.message);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        
        if (res.success) {
            setShowSuccess(true);
            reset();
            setTimeout(() => setShowSuccess(false), 5000); // Hide message after 5 seconds
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6">
            {showSuccess && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    Mensagem enviada com sucesso! Obrigado pelo contato.
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input 
                        type="text" 
                        {...register("name")}
                        placeholder="Nome"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        {...register("email")}
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        {...register("phone")}
                        placeholder="Telefone"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <textarea 
                        {...register("message")}
                        placeholder="Sua mensagem"
                        className="w-full p-2 border rounded h-32"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-primary text-white p-2 rounded hover:bg-primary/90"
                >
                    Enviar Mensagem
                </button>
            </form>
        </div>
    );
}

export default Contact;
