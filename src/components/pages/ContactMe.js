import React from "react";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import MyInput from "../UI/MyInput";
import MyTextarea from "../UI/MyTextarea";
import MyLinkButton from "../UI/MyLinkButton";
import styled from "styled-components";

function ContactMe() {
	return (
		<Section padding='3rem 0 0 0'>
			<SectionTitle> Contact me</SectionTitle>
			<ContactBody>
				<ContactForm>
					<MyInput width='100%' label='Name' />

					<MyInput width='100%' type='email' label='Email' />
					<MyTextarea />
					<MyLinkButton as='button' border='grey'>
						Send
					</MyLinkButton>
				</ContactForm>
			</ContactBody>
		</Section>
	);
}

export default ContactMe;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 500px;
	margin: 0 auto;
	> :not(:last-child) {
		margin: 0 0 30px 0;
	}
`;

const ContactBody = styled.div`
	padding: 2.5rem 15px 0 15px;
`;
