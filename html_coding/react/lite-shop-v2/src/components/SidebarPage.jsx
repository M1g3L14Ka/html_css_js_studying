

function SidebarPage({categorys, setSelectedCategory}) {
    return (
        <div className="sidebar-text-info">
            <h1>Типа фильтр</h1>
            {categorys.map((category) => {
                return (
                    <div className="filter-categorys" key={category.id}>
                        <button
                            id={category.id}
                            className="sidebar-filter-btn"
                            onClick={() => setSelectedCategory(category.category)}
                        >
                            {category.category}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default SidebarPage