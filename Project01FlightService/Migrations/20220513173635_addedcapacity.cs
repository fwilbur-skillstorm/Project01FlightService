using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project01FlightServiceFAW.Migrations
{
    public partial class addedcapacity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Capacity",
                table: "Flights",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Capacity",
                table: "Flights");
        }
    }
}
