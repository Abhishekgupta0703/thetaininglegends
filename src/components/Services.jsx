import PropTypes from 'prop-types';
import {FaCamera, FaRandom, FaCanadianMapleLeaf} from "react-icons/fa"
const serviceList = [
    {
        color: "red",
        icon: <FaCanadianMapleLeaf />,
        title: "Data Entry",
        description:
            "Given. Morning it darkness moved. Winged may, living moveth multiply earth day heaven land a dry divide multiply darkness midst.",
    },
    {
        color: "blue",
        icon: <FaRandom />,
        title: "Content Verifing",
        description:
            "Created, every, green deep abundantly set said our life second greater. Forth had first let night had. Brought creepeth that.",
    },
    {
        color: "red",
        icon: <FaCamera />,
        title: "Photo Editing",
        description:
            "Every upon which behold evening forth. Beast life days deep man. I you're likeness doesn't whose. Creature creepeth from subdue.",
    },
    {
        color: "red",
        icon: <FaCamera />,
        title: "Branding",
        description:
            "Image set multiply the had greater without face itself whales yielding image female fruit given light second bring seed in.",
    },
    {
        color: "blue",
        icon: <FaRandom />,
        title: "Content Marketing",
        description:
            "Given dominion spirit years evening together form rule meat two subdue after likeness greater from cattle yielding creature bring all.",
    },
    {
        color: "red",
        icon: <FaCanadianMapleLeaf />,
        title: "API Intigration",
        description:
            "A, fowl after dominion under. Years be beast evening fruitful whose seasons second seas let morning together cattle fill you.",
    },
];

const ServiceItem = ({service, isRightAlign}) => (
    <div className={`flex mt-3 ${isRightAlign ? "lg:text-end " : "lg:flex-row-reverse"}`}>
        <div className={`mr-4 lg:mr-0  lg:order-2 ${isRightAlign ? "lg:ml-7" : "lg:ml-0 lg:mr-7"} `} >
            <span
                className={` bg-${service.color}-600  bg-${service.color}-400  bg-${service.color}-700 text-black w-16 h-16 rounded-full text-3xl inline-flex justify-center items-center mb-6`}
            >
                {service.icon}
            </span>
        </div>
        <div>
            <h4 className="text-2xl font-medium  mb-1">{service.title}</h4>
            <p className="opacity-80">{service.description}</p>
        </div>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
    isRightAlign: PropTypes.bool,
};

ServiceItem.defaultProps = {
    isRightAlign: false,
};

const Services = () => {
    return (
        <section className="py-6 bg-white text-zinc-900 h-fit">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-center mb-0 ">
                    <div className="w-full max-w-xl text-center">
                        <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
                            Services We Have
                        </h2>
                        <p className="text-lg opacity-80">
                            Heaven third, in years fourth every male seed fish us saying
                            female his great doesn't. Bearing. Kind sixth moving, beast.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 lg:gap-12 ">
                    <div className=" col-span-3 lg:col-span-1 lg:order-2">
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-2xl h-full lg:mt-12 min-h-[200px] max-h-[450px] my-3"
                            style={{
                                backgroundImage:
                                    "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign3.jpg)",
                            }}
                        ></div>
                    </div>
                    <div className="col-span-3 lg:col-span-1 ">
                        <div className="lg:my-12">
                            {serviceList.slice(3, 6).map((service, i) => (
                                <ServiceItem service={service} key={i} isRightAlign={true} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-1  lg:order-3">
                        <div className="lg:my-12">
                            {serviceList.slice(0, 3).map((service, i) => (
                                <ServiceItem service={service} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;