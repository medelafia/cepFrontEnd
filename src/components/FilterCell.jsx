import FilteValue from "./FilterValue"

export default function FilterCell({filterTitle,filterValues = []}) {
    const renderFilterValues = () => {
        return filterValues.map((filterValue , index) => <FilteValue filterValue={filterValue} key={index} />)
    } 
    return (
        <div>
            <div className="text-secondary d-flex align-items-center justify-content-between cursor-pointer" data-bs-toggle="collapse" data-bs-target="#demo">
                <span className="text-capitalize">{filterTitle}</span>
                <i class="fa-solid fa-chevron-down mx-3"></i>
            </div>
            <div id="demo" class="collapse">
                {renderFilterValues()}
            </div>
        </div>        
    )
}