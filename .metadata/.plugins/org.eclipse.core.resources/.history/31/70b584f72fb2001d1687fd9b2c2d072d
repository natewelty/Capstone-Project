package com.cogent.entity;

import java.time.OffsetDateTime;

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

@ManyToOne
private Question question;
// @OneToOne
private String approved_by;
// @OneToOne
private String created_by;
}
