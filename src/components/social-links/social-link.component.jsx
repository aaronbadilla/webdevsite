import "./social-link.styles.scss";

const SocialLink = ({ link, image, text, name }) => {
	return (
		<a
			href={link}
			className="social-link"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={image} alt={name} className="social-link-image" />
			<h3 className="social-link-text">{text}</h3>
		</a>
	);
};

export default SocialLink;
