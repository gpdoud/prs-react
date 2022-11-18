
const Header = (props) => {
    return (
        <div>
            <span className="fw-bold">{props.pageTitle}</span>
            
            { props.linkComponent && (<span> | <span>{props.linkComponent}::{props.linkDisplay}</span></span>) }
        </div>
    )
}

export default Header;