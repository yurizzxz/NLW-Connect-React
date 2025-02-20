import logo from '@/assets/logo.svg'
import { Radio } from 'lucide-react';
import Image from 'next/image';
import SubscriptionForm from './subscription-form';

export default function Home() {
	return (
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
				<SubscriptionForm></SubscriptionForm>
			</div>
		</div>
	)
}
