import posts from '@/mock/posts.json'
// Project imports
import Post from './Post'

function Posts() {
	return (
		<div className='w-full min-h-min max-h-max flex flex-col p-10 overflow-hidden items-center gap-5'>
			<h1 className='text-4xl font-medium text-slate-900 text-center'>
				Lo ultimo en nuestro blog
			</h1>
			<h4 className='text-lg md:w-2/3 lg:w-2/5 text-center text-slate-700'>
				Create custom landing pages with Rareblocks that converts more
				visitors than any website.
			</h4>
			<section className='w-full h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mt-5'>
				{posts.posts.map((el, i) => (
					<Post
						key={i}
						{...el}
					/>
				))}
			</section>
		</div>
	)
}

export default Posts
