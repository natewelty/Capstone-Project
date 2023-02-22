package com.cogent.requests;


import com.cogent.entity.Question;
import lombok.Data;

@Data
public class AnswerRequest {

	public String description_answer;
	public String img_src;

	public int questionId;
	public Question question;

	public String created_by;

	public AnswerRequest() {
		super();
	}

	public AnswerRequest(String description_answer, String img_src, int questionId, String created_by) {
		super();
		this.description_answer = description_answer;
		this.img_src = img_src;
		this.questionId = questionId;
		this.created_by = created_by;
	}
	

}
