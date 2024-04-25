const categories = [
	{ label: "All", value: "", isActive: false },
	{ label: "Branding", value: "Branding", isActive: true },
	{ label: "Code", value: "Code", isActive: false },
	{ label: "Marketing", value: "Marketing", isActive: false },
];

const portfolioList = [
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio32.jpg",
		title: "Marketing",
		categories: ["Digital Marketing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio31.jpg",
		title: "Management",
		categories: ["Content Writing"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio30.jpg",
		title: "Branding",
		categories: ["Product Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio29.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio28.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio27.jpg",
		title: "Customaization",
		categories: ["Theme Development"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio26.jpg",
		title: "Web Portal Dev",
		categories: ["UI/UX Design"],
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg",
		title: "Development",
		categories: ["Editor Expert"],
	},
];

const Gallery = () => {
	return (
		<section className="py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white ">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 lg:gap-12">
					<div className="col-span-12 md:col-span-4 md:mt-6 lg:mt-12 md:pt-6 lg:pt-12">
						<div className="xl:my-12 xl:py-12">
							<div className="mb-6 md:my-12 lg:py-12">
								<h2 className="text-3xl leading-none md:text-[45px] mb-6">
									My Latest Works
								</h2>
								<p className="text-lg leading-8 mb-2">
									It’s easier to reach your savings goals when you have the
									right savings account. It’s easier to reach your savings goals
									when you have the right savings account.
								</p>
								
							</div>
						</div>
						{portfolioList.slice(0, 2).map((portfolio, i) => (
							<div
								className="group rounded-xl overflow-hidden relative mt-6"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-96 w-full"
								/>
								<div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
									<h5 className="font-medium text-xl">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</div>

					<div className="col-span-12 md:col-span-4 md:mt-6 md:pt-6 lg:mt-12 lg:pt-12">
						{portfolioList.slice(2, 5).map((portfolio, i) => (
							<div
								className="group rounded-xl overflow-hidden relative mt-6"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-96 w-full"
								/>
								<div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
									<h5 className="font-medium text-xl">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</div>
					<div className="col-span-12 md:col-span-4">
						{portfolioList.slice(5, 8).map((portfolio, i) => (
							<div
								className="group rounded-xl overflow-hidden relative mt-6"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-96 w-full"
								/>
								<div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
									<h5 className="font-medium text-xl">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Gallery;