import '../styles/Link.css';

export default function(props) {
    return (
        <a id={props.id} className="list" href={props.href} target="_blank">{props.children}</a>
    );
}