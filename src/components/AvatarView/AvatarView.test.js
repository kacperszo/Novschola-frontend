import AvatarView from "./index";
import React from 'react';
import {shallow} from 'enzyme'

function renderAvatarView(args) {
    const defaultProps = {
        imageSrc: ""
    };
    const props = {...defaultProps, ...args};
    return shallow(<AvatarView {...props}/>);
}

it('should render without crashes', function () {
    const wrapper = renderAvatarView();
    expect(wrapper).toMatchSnapshot();
}); 


