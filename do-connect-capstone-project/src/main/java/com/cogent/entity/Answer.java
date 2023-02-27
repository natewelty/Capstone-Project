package com.cogent.entity;

import java.time.OffsetDateTime;

import org.hibernate.annotations.CascadeType;

import com.cogent.requests.AnswerRequest;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Answer {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
private String description_answer;
private String img_src;
private boolean status;
private OffsetDateTime datetime;
@ManyToOne()
private Question question;
private int qid;
// @OneToOne
private String approved_by;
// @OneToOne
private String created_by;
public Answer() {
	super();
}
public Answer (AnswerRequest answerRequest) {
	this.description_answer=answerRequest.description_answer;
	this.img_src= answerRequest.img_src;
	this.datetime=OffsetDateTime.now();
	this.status=false;
	this.question = answerRequest.getQuestion();
	this.question.addAnswer(this);
	this.qid=this.question.getId();
	this.created_by=answerRequest.created_by;
	
}
public Answer(int id, String description_answer, String img_src, boolean status, OffsetDateTime datetime,
		Question question, String approved_by, String created_by) {
	super();
	this.id = id;
	
	this.description_answer = description_answer;
	this.img_src = img_src;
	this.status = status;
	this.datetime = datetime;
	this.question = question;
	this.qid=this.question.getId();
	this.approved_by = approved_by;
	this.created_by = created_by;
	question.addAnswer(this);
}
public Answer(int id2, String description_answer2, String img_src2, String status2, Question question2,
		String approved_by2, String created_by2) {
	// TODO Auto-generated constructor stub
}

}
