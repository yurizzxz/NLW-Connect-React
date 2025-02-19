import logo from '@/assets/logo.svg'
import { ArrowRight, Radio, User } from 'lucide-react'
import Image from 'next/image'

import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'

export default function Home() {
	return (
		<main className="max-w-[1240] mx-auto px-5 py-8 md:py-0">
			<div className="min-h-dvh flex flex-col justify-center gap-16">
				<div className="flex flex-col items-center md:items-start gap-8 w-full max-w-[550px]">
					<Image src={logo} alt="logo" width={185.5} height={30} />

					<h1 className="text-4xl text-center leadging-none font-heading flex flex-col md:text-7xl md:text-left">
						<span className="text-blue-500">CodeCraft</span>Summit 2025
					</h1>
				</div>
				<div className="flex gap-5 items-stretch flex-col md:flex-row">
					<div className="flex-1 bg-gray-900 border-gray-600 rounded-2xl p-8 space-y-6">
						<div className="flex items-center justify-between">
							<h2 className="font-oxanium font-semibold text-xl">
								sobre o evento
							</h2>
							<span className="flex items-center gap-1 text-purple-500 text-xs">
								<Radio className="size-5" />
								ao vivo
							</span>
						</div>
						<p>
							Um evento feito por e para pessoas desenvolvedoras apaixonadas por
							criar soluções inovadoras e compartilhar conhecimento. Vamos
							mergulhar nas tendências mais recentes em desenvolvimento de
							software, arquitetura de sistemas e tecnologias emergentes, com
							palestras, workshops e hackathons. Dias 15 a 17 de março <br />
							<br /> Das 18h às 21h | Online & Gratuito{' '}
						</p>
					</div>
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
				</div>
			</div>
		</main>
	)
}
