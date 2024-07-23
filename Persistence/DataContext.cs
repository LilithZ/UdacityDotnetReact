using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) // Instantiating the partent class in the contructor
        {
        }

        public DbSet<Activity> Activities { get; set; } // "Activities" will be the table name for all the Activity entities
    }
}