import React from "react"
import ReactDOM from "react-dom"


class Test extends React.Component {
	render() {
		var list = window.props;
		return <div>{list.map(item => <TestChild key={item.pk}
				                  question={item}/>
		)} </div>;
	}
}

class TestChild extends React.Component {
	render() {
		return <li><b><a href={"/polls/" + this.props.question.pk}>{this.props.question.question_text}</a></b></li>
	}
}

ReactDOM.render(
	<Test />,
	window.react_mount
);
