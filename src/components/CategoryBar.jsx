
function CategoryBar(props) {
    const { c_class } = props;

    const setClass = "category p-2 " + c_class;
    return (
        <>
            <a href="/#" className={`${setClass}`}>
                Barbeque
            </a>
            <a href="/#" className={`${setClass}`}>
                Specials
            </a>
            <a href="/#" className={`${setClass}`}>
                Karachi Specials
            </a>
            <a href="/#" className={`${setClass}`}>
                Starters
            </a>
            <a href="/#" className={`${setClass}`}>
                Rolls and Breads
            </a>
            <a href="/#" className={`${setClass}`}>
                Beavreages
            </a>
            <a href="/#" className={`${setClass}`}>
                Bun Kabab and Chat
            </a>
            <a href="/#" className={`${setClass}`}>
                Chae
            </a>
            <a href="/#" className={`${setClass}`}>
                Barbeque Specials
            </a>
        </>
    )
}

export default CategoryBar;