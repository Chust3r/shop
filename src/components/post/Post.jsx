import Image from 'next/image'

// formats

function Post({ title, image, date, tags }) {
	return (
		<div className='block relative overflow-hidden'>
			{/* product img */}
			<div className='relative h-[300px]  sm:h-[250px] select-none overflow-hidden rounded-lg bg-slate-300'>
				{image && (
					<Image
						src={image}
						alt=''
						fill
						className='h-full w-full object-cover'
					/>
				)}
			</div>

			<div className='relative pt-3 flex gap-2 text-base font-medium text-slate-900 '>
				<p>Growth</p>
				<span>•</span>
				<p>{date}</p>
			</div>
			<div className='text-xl md:text-lg font-medium tracking-wide text-slate-700 '>
				<p>{title}</p>
			</div>
		</div>
	)
}

export default Post
