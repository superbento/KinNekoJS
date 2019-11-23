package com.cinema.dto;

import java.time.LocalDate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class Movie {

    @NotNull
    private Long id;

    @NotBlank
    private String title;

    @NotNull
    private MovieType type;

    private LocalDate releaseDate;

    @NotBlank
    private String director;

    public Movie() {
    }

    public Movie(Long id, String title, MovieType type, LocalDate releaseDate, String director) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.releaseDate = releaseDate;
        this.director = director;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public MovieType getType() {
        return type;
    }

    public void setType(MovieType type) {
        this.type = type;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }
}
