import React from "react";
import styled from "styled-components";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import MyInput from "../UI/MyInput";
import MyTextarea from "../UI/MyTextarea";
import MyLinkButton from "../UI/MyLinkButton";

const Contact = () => {
	return (
		<Section display='flex' direction='column'>
			<SectionTitle>Contact me</SectionTitle>
			<ContactBody>
				<ContactPar>You can easily contact me and tell me how your day was.</ContactPar>
				<ContactForm>
					<MyInput width='100%' label='Name' />
					<MyInput width='100%' type='email' label='Email' />
					<MyTextarea placeholder='Leave message here...' />
					<MyLinkButton as='button' border='grey'>
						Send
					</MyLinkButton>
				</ContactForm>
			</ContactBody>
		</Section>
	);
};

export default Contact;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	> :not(:last-child) {
		margin: 0 0 30px 0;
	}
	justify-content: center;
	align-items: center;
	max-width: 500px;
	margin: 0 auto;
`;

const ContactBody = styled.div`
	padding: 3rem 15px 0 15px;
`;

const ContactPar = styled.p`
text-align: center;
font-size: 1.3rem;
margin: 0 0 2.5rem 0;
`