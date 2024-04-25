import { useState } from "react";
const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form className="" noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD]  border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="3"
				></textarea>
			</div>
			<div className="text-end">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
				>
					Send
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="">
		<div className="p-6 md:p-12">
			<h2 className="text-2xl leading-none md:text-[45px] font-bold mb-4">
				Contact Us
			</h2>
			<p className="text-lg mb-12">
				We list your menu online, help you process orders.
			</p>

			<ContactForm />
		</div>
	</div>
);

const Contact = () => {
	return (
		<section className="py-6 bg-white  text-zinc-900  overflow-hidden">
			<div className="container px-4 mx-auto overflow-hidden">
				<div className="grid grid-cols-12 py-6">
					<div className="col-span-12 lg:col-span-6 lg:col-start-7 order-2 mb-4 lg:mb-0 rounded-ss-3xl rounded-ee-3xl overflow-hidden">
						<div
							className="bg-center bg-no-repeat bg-cover min-h[150px] w-full lg:w-[50vw] h-full "
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/contact/contact_7.png)",
							}}
						></div>
					</div>
					<div className="col-span-12 lg:col-span-5">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact