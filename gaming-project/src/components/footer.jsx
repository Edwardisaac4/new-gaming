

import 'boxicons/css/boxicons.min.css';

const socialLinks = [
    { name: 'GitHub', icon: 'bxl-github', href: '#' },
    { name: 'Twitter', icon: 'bxl-twitter', href: '#' },
    { name: 'Discord', icon: 'bxl-discord', href: '#' },
    { name: 'Instagram', icon: 'bxl-instagram', href: '#' },
];

const Footer = () => {
    return (
        <footer className="justify-between flex items-center lg:mt-[15%]
        mt-[20%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.4px] border-[#babaff]
        ">
            
            <img src="images/illu-text.png" alt="Illustrious text logo" className="h-10" />
            <img src="images/illu-logo.png" alt="Illustrious icon logo" className="h-16 md:inline hidden"/>
            
            
            <div className="flex gap-5">
                {socialLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${link.name} page`}
                        className="md:text-3xl text-2xl hover:text-indigo-600 transition-colors duration-300"
                    >
                        <i className={`bx ${link.icon}`}></i>
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer;