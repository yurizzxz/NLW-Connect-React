"use client";
import Button from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscritionSchema = z.object({
  name: z.string().min(2, "digite seu nome completo"),
  email: z.string().email("digite um email valido"),
});

type SubscriptionSchema = z.infer<typeof subscritionSchema>;

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string }>({
    resolver: zodResolver(subscritionSchema),
  });
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function onSubscride(data: SubscriptionSchema) {
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubscride)}
      className="bg-gray-900 border border-gray-700 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register("name")}
              type="text"
              placeholder="Nome completo"
            />
            {errors.name && (
              <p className="text-red-600 font-xs">{errors.name.message}</p>
            )}
          </InputRoot>
        </div>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </InputRoot>

          {errors.email && (
            <p className="text-red-600 font-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
