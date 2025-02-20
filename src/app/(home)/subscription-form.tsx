import Button from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { User, ArrowRight } from "lucide-react";

export default function SubscriptionForm() {
    return (
        <form
					className="bg-gray-900 border border-gray-700 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
					action=""
				>
					<h2 className="font-heading font-semibold text-gray-200 text-xl">
						Inscrição
					</h2>

					<div className="space-y-3">
						<InputRoot>
							<InputIcon>
								<User />
							</InputIcon>
							<InputField type="text" placeholder="Nome completo" />
						</InputRoot>
						<InputRoot>
							<InputIcon>
								<User />
							</InputIcon>
							<InputField type="email" placeholder="Email" />
						</InputRoot>
					</div>

					<Button type="submit">
						Confirmar
						<ArrowRight />
					</Button>
				</form>
    )
}