const clientLogos = [
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
		alt: "",
	},
];
// dark:bg-[#0b1727]  dark:text-white
const Clients = () => {
	return (
		<section className="ezy__clients4 py-14 md:py-24 bg-white  text-zinc-900">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-12">
					<h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-2">
						Meet Our Clients & Partners
					</h2>
				</div>
				<marquee behavior="scroll" direction="left" loop>
					<div className="flex justify-center items-center text-center">
						{clientLogos.map((client, i) => (
							<img
								src={client.logo}
								alt={client.alt}
								className="max-h-12 img-fluid px-12 my-6"
								key={i}
							/>
						))}
					</div>
				</marquee>
			</div>
		</section>
	);
};
export default Clients;