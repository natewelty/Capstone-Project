package com.cogent.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
@Entity
@Data
public class Question {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
private String description_question;
private String image_src;
private String datetime;
private String status;
private String topic;
private String title;
@OneToMany(mappedBy = "question", fetch=FetchType.EAGER)
@JsonIgnore
private List<Answer> answers;
// @OneToOne
private String qcreated_by;
//
// @OneToOne
private String qapproved_by;
}
