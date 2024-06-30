function RunMigrations {
    param (
        [string]$PersistenceProjectPath,
        [string]$StartupProjectPath,
        [string]$MigrationName
    )

    # Navigate to the directory containing the solution file
    cd (Split-Path $StartupProjectPath)

    # Check if the migration already exists
    $migrationExists = (dotnet ef migrations list --project $PersistenceProjectPath --startup-project $StartupProjectPath | Select-String $MigrationName)

    if ($migrationExists) {
        Write-Host "Migration '$MigrationName' already exists. Updating the database..."
        # Update database
        dotnet ef database update --project $PersistenceProjectPath --startup-project $StartupProjectPath
    }
    else {
        Write-Host "Migration '$MigrationName' does not exist. Adding the migration and updating the database..."
        # Add migration
        dotnet ef migrations add $MigrationName --project $PersistenceProjectPath --startup-project $StartupProjectPath
        # Update database
        dotnet ef database update --project $PersistenceProjectPath --startup-project $StartupProjectPath
    }
}

# Prompt the user to input the migration name
$MigrationName = Read-Host "Enter the migration name"

# Specify the relative paths to the project files
$PersistenceProjectPath = "D:\ERPproject\ERP.Persistence\ERP.Persistence.csproj"
$StartupProjectPath = "D:\ERPproject\ERP\ERP.csproj"

# Call the RunMigrations function with the provided parameters
RunMigrations -PersistenceProjectPath $PersistenceProjectPath -StartupProjectPath $StartupProjectPath -MigrationName $MigrationName
