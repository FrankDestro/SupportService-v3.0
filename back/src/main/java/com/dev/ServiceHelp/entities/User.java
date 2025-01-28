package com.dev.ServiceHelp.entities;

import com.dev.ServiceHelp.enums.StatusUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data

@Entity
@Table(name = "tb_user")
@EntityListeners(AuditingEntityListener.class)
public class User implements UserDetails {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private String password;
    private String contactNumber;
    private StatusUser statusUser;
    private String imgProfile;
    private Integer failedLoginAttempts;
    @Column(nullable = true)
    private Boolean blocked;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @ManyToOne
    private SolvingArea solvingArea;

    @ManyToMany
    @JoinTable(name = "tb_user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Attachment> attachment = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "id_department")
    private Department department;

    @OneToMany(mappedBy = "requester")
    private Set<Ticket> ticketsRequested = new HashSet<>();

    @OneToMany(mappedBy = "technician")
    private Set<Ticket> ticketServed = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Attachment> attachments = new HashSet<>();

    //novo
    @OneToMany(mappedBy = "RegistratorUser")
    private Set<KnowError> knowErrors = new HashSet<>();

    public User(Long id) {
        this.id = id;
    }

    public void addRole(Role role) {
        roles.add(role);
    }

    public boolean hasRole(String roleName) {
        for (Role role : roles) {
            if (role.getAuthority().equals(roleName)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return failedLoginAttempts < 5;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return !this.statusUser.toString().equalsIgnoreCase("INACTIVE");

    }
}
