using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ActualProject1.Models;

#nullable disable

namespace ActualProject1.Models
{
    public partial class ActualProject1Context : DbContext
    {
        string connection = Secret.AzureString;

        public ActualProject1Context()
        {
        }

        public ActualProject1Context(DbContextOptions<ActualProject1Context> options)
            : base(options)
        {
        }

        public virtual DbSet<DailySurvey> DailySurveys { get; set; }
        public virtual DbSet<FoodRegimen> FoodRegimens { get; set; }
        public virtual DbSet<PhilosophySchool> PhilosophySchools { get; set; }
        public virtual DbSet<UserProfiles> UserProfiles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer(connection);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<DailySurvey>(entity =>
            {
                entity.Property(e => e.DailyGoal).HasMaxLength(150);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.DailySurveys)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__DailySurv__UserI__6477ECF3");
            });

            modelBuilder.Entity<FoodRegimen>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(25);
            });

            modelBuilder.Entity<PhilosophySchool>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(25);
            });

            modelBuilder.Entity<UserProfiles>(entity =>
            {
                entity.Property(e => e.BirthDate).HasColumnType("date");

                entity.Property(e => e.Email).HasMaxLength(40);

                entity.Property(e => e.FirstName).HasMaxLength(20);

                entity.Property(e => e.FoodRegimenFk).HasColumnName("FoodRegimenFK");

                entity.Property(e => e.Mantra).HasMaxLength(200);

                entity.Property(e => e.Password).HasMaxLength(20);

                entity.Property(e => e.PhilosphySchoolFk).HasColumnName("PhilosphySchoolFK");

                entity.HasOne(d => d.FoodRegimenFkNavigation)
                    .WithMany(p => p.UserProfiles)
                    .HasForeignKey(d => d.FoodRegimenFk)
                    .HasConstraintName("FK__UserProfi__FoodR__60A75C0F");

                entity.HasOne(d => d.PhilosphySchoolFkNavigation)
                    .WithMany(p => p.UserProfiles)
                    .HasForeignKey(d => d.PhilosphySchoolFk)
                    .HasConstraintName("FK__UserProfi__Philo__619B8048");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
