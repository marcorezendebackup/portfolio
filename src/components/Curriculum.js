import React, { Component } from 'react';

class Curriculum extends Component {
	render() {
		return (
			<div className="curriculum-container">
				<div className="curriculum">
					<div className="curriculum-icon-wrapper">
						<i className="fas fa-file-alt"></i>
					</div>
					<button className="btn-download"><a href="https://drive.google.com/file/d/1pT23u9OsDV5ABPOqDx8ZDK5B1hLBHC1q/view" target="_blank" rel="noopener noreferrer"><i className="fas fa-long-arrow-alt-down"></i>Currículo</a></button>
				</div>
			</div>
		)
	}
}

export default Curriculum ;