package com.cogent.entity;

import java.time.OffsetDateTime;
import java.util.List;

import org.hibernate.annotations.CascadeType;

import com.cogent.requests.QuestionRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String description_question;
	private String image_src;
	private OffsetDateTime datetime;
	private boolean status;
	private String topic;
	private String title;
	@OneToMany(mappedBy = "question", fetch = FetchType.EAGER, orphanRemoval = true)
	@JsonIgnore
	private List<Answer> answers;
// @OneToOne
	private String qcreated_by;
//
// @OneToOne
	private String qapproved_by;

	public void addAnswer(Answer answer) {
		answers.add(answer);
	}
	public Question(QuestionRequest questionRequest) {
		this.description_question=questionRequest.getDescription_question();
		this.image_src=questionRequest.getImage_src();
		this.topic=questionRequest.getTopic();
		this.title=questionRequest.getTitle();
		this.qcreated_by=questionRequest.getQcreated_by();
		this.status=false;
		this.datetime=OffsetDateTime.now();
	}
}
