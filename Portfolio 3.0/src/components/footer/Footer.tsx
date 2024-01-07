
function Footer() {
    return (
        <footer className="w-full h-[100px] bg-slate-600">
            <div className="relative container m-auto flex items-center justify-center h-full">
                <h3 className="text-xl text-center">Made by Viduwa &copy;2024 <br />Version 3.0</h3>
                <ul className="absolute bottom-0 right-0">
                     <li className="text-sm"><a href="https://github.com/viduwaa/viduwaa.github.io/tree/version-1.0" className="hover:text-white" target="_blank" >Version 2</a></li>
                     <li className="text-sm"><a href="https://github.com/viduwaa/viduwaa.github.io/tree/version-2.0" className="hover:text-white" target="_blank" >Version 3</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
