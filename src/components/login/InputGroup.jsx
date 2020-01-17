import React from 'react';

const InputGroup = props => {
	return (
		<div className="input-group input-group-lg my-3">
			<div class="input-group-prepend">
				<span class="input-group-text bg-white" id="basic-addon1">
					{props.icon}
				</span>
			</div>
			{props.children}
		</div>
	);
};

export default InputGroup;
