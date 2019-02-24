import React, { Component } from 'react';
import './Detail.scss';

interface Props {
  id:number;
  match: match<{id:string}>;
}

interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
class Detail extends Component {

  constructor(props: Props) {
    super(props);
    console.log(props.match.params.id);
	}

  render() {
    return (
      <div className="Detail">
        Detail works!
      </div>
    );
  }
}

export default Detail;
