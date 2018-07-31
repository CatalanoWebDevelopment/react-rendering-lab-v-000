import React from 'react';

class Circle extends React.Component {

  shouldComponentupdate(nextProps, nextState) {
      
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
 