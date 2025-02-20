import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
	children: React.ReactNode
}

export function IconButton({ className, ...props}: IconButtonProps) {
	return (
		<button
			{...props}
			className={twMerge("p-1.5 bg-gray-600 text-[#6f9De2] rounded-xl hover:bg-blue-500 transition-colors duration-300 hover:text-white", className)}
		/>
	)
}

export default IconButton
