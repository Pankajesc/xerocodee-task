import classes from "./links.module.css";
import SubscribeForm from "./subscribeForm";

const CompanyLinks = ["#", "#", "#", "#", "#"];
const ProductLinks = ["#", "#", "#", "#", "#", "#"];
const InformationLinks = ["#", "#", "#"];

const CompanyLinkLabels = ["About Us", "Contact Us", "Careers", "Lift Media"];
const ProductLinkLabels = [
	"Employee Database",
	"Payroll",
	"Absences",
	"Time Tracking",
	"Shift Planner",
	"Recruiting",
];
const InformationLinkLabels = ["FAQs", "Blog", "Support"];

const links = [
	{
		title: "Product",
		labels: ProductLinkLabels,
		links: ProductLinks,
	},
	{
		title: "Information",
		labels: InformationLinkLabels,
		links: InformationLinks,
	},
	{
		title: "Company",
		labels: CompanyLinkLabels,
		links: CompanyLinks,
	},
];

const Links = () => {
	return (
		<main className={classes.linkPage}>
			{links.map((link, index) => (
				<div className={classes.lists} key={index}>
					<h3>{link.title}</h3>
					{link.labels.map((label, index) => (
						<li key={index}>
							<a href={link.links[index]}>{label}</a>
						</li>
					))}
				</div>
			))}
			<SubscribeForm />
		</main>
	);
};
export default Links;
