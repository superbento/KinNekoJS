package com.cinema.endpoint;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import javax.validation.Valid;

import com.cinema.dto.Movie;
import com.cinema.dto.MovieType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private static final Map<Long, Movie> MOVIE_DATASOURCE = new HashMap<>();
    static {
        MOVIE_DATASOURCE.put(1L, new Movie(1L, "Overwatch", MovieType.SCIFI, LocalDate.of(2013, Month.NOVEMBER, 7), "Nolan"));
        MOVIE_DATASOURCE.put(2L, new Movie(2L, "exam is coming", MovieType.DRAMA, LocalDate.of(2018, Month.SEPTEMBER, 16), "MENG SHI"));
    }

    @GetMapping
    public ResponseEntity findAll() {
        if (MOVIE_DATASOURCE.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            var movies = new ArrayList<>(MOVIE_DATASOURCE.values());

            return ResponseEntity.ok(movies);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity findOne(@PathVariable Long id) {
        var movie = Optional.ofNullable(MOVIE_DATASOURCE.get(id));

        return movie.<ResponseEntity>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity createMovie(@RequestBody @Valid Movie movie) {
        MOVIE_DATASOURCE.put(movie.getId(), movie);

        return ResponseEntity.noContent().build();
    }

    @PutMapping
    public ResponseEntity updateMovie(@RequestBody @Valid Movie movie) {
        MOVIE_DATASOURCE.put(movie.getId(), movie);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteMovie(@PathVariable Long id) {
        MOVIE_DATASOURCE.remove(id);

        return ResponseEntity.noContent().build();
    }

}
