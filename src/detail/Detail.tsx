import React, { Component } from 'react';
import './Detail.scss';

interface Props {
  match: match<{id:string}>;
}

interface State {
  id: string;
}

interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

class Detail extends Component<Props,State> {

  constructor(props: Props) {
    super(props);
    const id = props.match.params.id;
    this.state = {id};
	}

  render() {
    return (
      <div className="Detail">
        Note: {this.state.id}
      </div>
    );
  }
}

export default Detail;
